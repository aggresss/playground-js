function Person(){
    var name = 'default';

    function setName(n){
        name = n;
    }

    function getName(){
        return name;
    }

    return{
        setName:setName,
        getName:getName
    }
}

export {Person};

