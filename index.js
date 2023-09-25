// code your solution here
function superbowlWin(record){
    const yearWon = record.find(item => item.result === 'W')

    if(yearWon){
        return yearWon.year
    }else{
        return undefined
    }
}