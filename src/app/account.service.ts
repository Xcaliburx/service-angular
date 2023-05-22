import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
export class AccountService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
    statusUpdated = new EventEmitter<string>()
      
    constructor(private loggingService: LoggingService) {}

    addAccount(name, status) {
        this.accounts.push({name: name, status: status})
        this.loggingService.logToConsole(status)
    }

    updateAccount(id, status) {
        this.accounts[id].status = status
        this.loggingService.logToConsole(status)
    }
}