    import { Injectable } from '@angular/core';
    
    @Injectable()
    export class Logger {
      logs: string[] = []; // capture logs for testing
      log(message: string) {
        this.logs.push(message);
        console.log(message);
      }

      alert(message: string) {
        this.logs.push(message);
        alert(message);
      }

      alert_json(json: any) {
        let message:string= JSON.stringify(json);
        this.logs.push(message);
        alert(message);
      }

    }