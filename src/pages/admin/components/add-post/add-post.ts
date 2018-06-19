import { Component, OnInit, OnDestroy, EventEmitter, Output, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminDataProvider } from '../../providers/admin-data.provider';
import { CategoryModel } from '../../../blog/model/category.model';
import { Subscription } from 'rxjs/Subscription';

@IonicPage()
@Component({
  selector: 'app-add-post',
  templateUrl: 'add-post.html',
})
export class AddPostPage implements OnInit, OnDestroy {

  @Output() updatePosts: EventEmitter<string> = new EventEmitter();

  @Input() categories: Array<CategoryModel>;

  public addPostFormGroup: FormGroup;
  public currentComponent: string;
  public deleteButtonDisabled: boolean = true;
  public isModifyingPost: string = undefined;

  private subscription: Subscription = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private adminDataProvider: AdminDataProvider
  ) {
  }

  ngOnInit(): void {
    this.addPostFormGroup = this.formBuilder.group({
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
      text: ['', Validators.required],
      category: ['', Validators.required]
    });
    this.subscription.add(this.adminDataProvider.getCurrentModifiedPost().subscribe(currentModifiedPost => {
      if (currentModifiedPost) {
        this.isModifyingPost = currentModifiedPost._id;
        delete currentModifiedPost._id;
        this.addPostFormGroup.setValue(currentModifiedPost);
      }
    }));
  }


  addOrUpdatePost(formValue, isValid) {
    if (!isValid) {
      return;
    }
    if (this.isModifyingPost) {
      this.modifyPost(formValue, isValid);
    } else {
      this.addPost(formValue, isValid);
    }
  }

  addPost(addPotsFormValue, isValid) {
    this.subscription.add(this.adminDataProvider.addPost(addPotsFormValue).subscribe(response => {
      this.updatePosts.emit();
    }));
  }

  modifyPost(modifyPostFormValue, isValid) {
    this.subscription.add(this.adminDataProvider.modifyPost(this.isModifyingPost, modifyPostFormValue).subscribe(response => {
      this.updatePosts.emit();
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
