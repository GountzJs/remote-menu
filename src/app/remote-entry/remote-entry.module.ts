import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { remoteEntryRoutes } from './remote-entry.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(remoteEntryRoutes),
    HttpClientModule,
  ],
})
export class RemoteEntryModule {}
