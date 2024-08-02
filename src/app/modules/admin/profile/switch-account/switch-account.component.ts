import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-account',
  templateUrl: './switch-account.component.html',
  styleUrl: './switch-account.component.css'
})
export class SwitchAccountComponent {
  accounts = [
    { type: 'admin', name: 'Admin Account', isActive: true },
    { type: 'member', name: 'Member Account', isActive: false },
    { type: 'user', name: 'User Account', isActive: false },
  ];

  // Initially set the active account
  selectedAccount: string = this.accounts.find((acc) => acc.isActive)?.type || '';

  onAccountChange(account: any) {
    // Log in to the selected account if not already active
    if (!account.isActive) {
      this.toggleLogin(account);
    }
  }

  toggleLogin(account: any) {
    if (account.isActive) {
      // If the account is active, log it out and deselect the radio button
      account.isActive = false;
      this.selectedAccount = ''; // Clear selection when logging out
      console.log(`${account.name} logged out.`);
    } else {
      // Log out all accounts and log in the selected one
      this.accounts.forEach((acc) => (acc.isActive = false));
      account.isActive = true;
      this.selectedAccount = account.type;
      console.log(`${account.name} logged in.`);
    }
  }
}
