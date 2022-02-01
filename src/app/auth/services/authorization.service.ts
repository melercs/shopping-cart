import {Injectable} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {User, UserObject} from '../models/user.model';
import {AppState} from '../../../state/app.state';
import {SetUserAction, UnSetUserAction} from '../../../state/actions/authorization.actions';
import {ActivateLoadingAction, DeactivateLoadingAction} from '../../../state/actions/ui-loading.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private userSubscription: Subscription = new Subscription();
  private user: User;

  constructor(
    private afAuth: AngularFireAuth,
    private afDB: AngularFirestore,
    private router: Router,
    private store: Store<AppState>
  ) {
  }

  initAuth(): void {
    this.afAuth.authState.subscribe((fbUser: firebase.default.User) => {
      if (fbUser) {
        this.userSubscription = this.afDB.doc(`Usuario/${fbUser.uid}`)
          .valueChanges()
          .subscribe((usuarioObj: UserObject) => {
            const newUser = new User(usuarioObj);
            this.store.dispatch(new SetUserAction(newUser));
            this.user = newUser;
          });
      } else {
        this.user = null;
        this.userSubscription.unsubscribe();
      }
    });
  }

  signup(email: string, password: string, username: string): Promise<void> {
    this.store.dispatch(new ActivateLoadingAction());
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(resp => {
        const user: User = {
          uid: resp.user?.uid,
          email: resp.user?.email,
          username
        };
        this.afDB
          .doc(`Usuario/${user.uid}`)
          .set(user)
          .then(() => {
            this.router.navigate(['/']);
            this.store.dispatch(new DeactivateLoadingAction());
          });
      });
  }

  login(email: string, password: string): Promise<void> {
    this.store.dispatch(new ActivateLoadingAction());
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        this.router.navigate(['/']);
        this.store.dispatch(new DeactivateLoadingAction());
      });
  }


  logout(): void {
    this.router.navigate(['/auth/login']);

    this.store.dispatch(new UnSetUserAction());
    this.afAuth.signOut();
  }

  isAuth(): Observable<boolean> {
    return this.afAuth.authState
      .pipe(
        map(fbUser => {
          if (fbUser == null) {
            this.router.navigate(['/auth/login']);
          }
          return fbUser != null;
        })
      );
  }

  getUser(): User {
    return {...this.user};
  }
}
