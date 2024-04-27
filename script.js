function minCost(arr) {
    let totalCost = 0;

    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    // While there is more than one rope
    while (arr.length > 1) {
        // Take the two smallest ropes
        let cost = arr.shift() + arr.shift();
        
        // Add their cost to the total cost
        totalCost += cost;

        // Insert the new rope in the correct position in the array
        let index = arr.findIndex((length) => length >= cost);
        
        // If no rope is longer than the new rope, append it at the end
        if (index === -1) {
            arr.push(cost);
        } else {
            arr.splice(index, 0, cost);
        }
    }

    return totalCost;
}
module.exports=minCost;
