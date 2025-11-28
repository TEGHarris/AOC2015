const total = presents.reduce((acc : number, current: Present) => {
    return acc += current.wrappingPaperRequired;
},0);