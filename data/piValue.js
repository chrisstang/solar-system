// Act as a temporary server database

export class GlobalRef {
    constructor(uniqueName) {
      this.sym = Symbol.for(uniqueName)
    }
  
    get data() {
      return global[this.sym]
    }
  
    set data(value) {
      global[this.sym] = value;
    }
}

const databaseConn = new GlobalRef('database');
if (!databaseConn.piValue) {
  databaseConn.piValue = 3.142
  databaseConn.digits = 3
}

export const data = databaseConn;