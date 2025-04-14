// Step 9: Register Store – Uncomment commented lines to declare components, register the todo reducer globally and enable routing 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderLocalComponent } from './local-state/header/header.component';
import { TodoListLocalComponent } from './local-state/todo-list/todo-list.component';
import { HttpClientModule } from '@angular/common/http';
// import { HeaderNgRXComponent } from './ngrx-state/header/header.component';
// import { TodoListNgRXComponent } from './ngrx-state/todo-list/todo-list.component';
// import { EffectsModule } from '@ngrx/effects';
// import { StoreModule } from '@ngrx/store';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { AppRoutingModule } from './app-routing.module';
// import { todoReducer } from './store/reducers/todo.reducer';
// import { TodoEffects } from './store/effects/todo.effects';


@NgModule({
  declarations: [
    AppComponent,
    TodoListLocalComponent,
    HeaderLocalComponent,
    // TodoListNgRXComponent,
    // HeaderNgRXComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // AppRoutingModule,
    // StoreModule.forRoot({ todos: todoReducer }),

    // EffectsModule.forRoot([TodoEffects]),
    // StoreDevtoolsModule.instrument({
    //   maxAge: 5,
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


