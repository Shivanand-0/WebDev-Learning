

class ExpressError extends Error{
    constructor(stat,msg){
        super();
        this.status=stat;
        this.message=msg;
    }
}

module.exports=ExpressError