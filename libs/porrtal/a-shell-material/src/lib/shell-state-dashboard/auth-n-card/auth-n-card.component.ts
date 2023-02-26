import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthNInterface } from '@porrtal/a-user';
import { BehaviorSubject } from 'rxjs';
import { ShellStateService } from '@porrtal/a-shell';

@Component({
  selector: 'porrtal-auth-n-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-n-card.component.html',
  styleUrls: ['./auth-n-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthNCardComponent {
  isMaximized$ = new BehaviorSubject<boolean>(false);
  childIndex = -1;
  parentNativeEl: any;

  authNSubj = new BehaviorSubject<{ authN: AuthNInterface | undefined }>({
    authN: undefined,
  });
  _authN?: AuthNInterface;
  state = 'waiting...';

  @Input() public set data(value: AuthNInterface) {
    this._authN = value;
    this.authNSubj.next({ authN: value });

    this._authN.state$.subscribe((authNState) => {
      this.authNSubj.next({ authN: this._authN });
      this.state = authNState;
    });
  }

  constructor(
    private readonly el: ElementRef,
    private shellStateService: ShellStateService
  ) {}

  toggleMax() {
    this.shellStateService.dispatch({
      type: 'maximize',
      htmlEl: this.el.nativeElement,
      maximizeText: 'auth n',
      restore: () => {
        this.isMaximized$.next(false);
        console.log('auth-n-card restore', this);
      },
    });

    this.isMaximized$.next(true);
  }
}
