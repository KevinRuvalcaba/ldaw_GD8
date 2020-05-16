class BankAccount{
    constructor(){
        this.funds = 0; 
        this.logs = [];
    }
    current(){
        return this.funds;
    }
    append(amount){
        if(amount <= 0) return this.funds;
        this.funds +=amount;
        this.logs.push({type:'Addition', amount: amount});
        return this.funds;
    }
    substract(amount){
        if(amount <= 0) return this.funds;
        this.funds -=amount;
        this.logs.push({type:'Substraction', amount: amount});
        return this.funds;
    }
    history(){
        return this.logs;
    }
    merge(account){
        if(account.funds < 0) this.funds += account.funds;
        else this.funds -= account.funds;
        account.logs.forEach(log => {
            this.logs.push(log);
        })

    }

}

module.exports = BankAccount;