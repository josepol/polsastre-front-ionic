import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { BlogDataProvider } from '../../providers/blog-data.provider';
import AuthProvider from '../../../../shared/providers/auth.provider';
import { CommentsModel } from 'pages/blog/model/comments.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmationModalComponent } from '../../../../shared/components/confirmation-modal/confirmation-modal';

@Component({
  selector: 'app-comments',
  templateUrl: 'comments.html',
})
export class CommentsComponent implements OnInit {

  @Input() postId: string;

  public isAuthenticated: boolean;
  public comments: Array<CommentsModel>;
  public commentForm: FormGroup;

  constructor(
    private blogDataProvider: BlogDataProvider,
    private authProvider: AuthProvider,
    private formBuilder: FormBuilder,
    private modalController: ModalController
  ) {
  }

  ngOnInit(): void {
    this.initCommentForm();
    this.getIsAuthenticated();
    this.getComments();
  }

  private initCommentForm() {
    this.commentForm = this.formBuilder.group({
      text: ['', Validators.required]
    });
  }

  private getIsAuthenticated() {
    this.authProvider.getIsAuthenticated().subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
  }

  private getComments() {
    this.blogDataProvider.getComments(this.postId).subscribe(comments => {
      this.comments = comments;
    });
  }

  public sendComment(isValid, value) {
    if (!isValid) {
      return;
    }

    const confirmationModalComponent = this.modalController.create(ConfirmationModalComponent, {text: '¿Leave comment?'});
    confirmationModalComponent.onDidDismiss(data => {
      if(data.status === 'OK') {
        this.blogDataProvider.postComment(value.text, this.postId).subscribe(response => {
          this.getComments();
        });
      }
    });
    confirmationModalComponent.present();
  }

}
