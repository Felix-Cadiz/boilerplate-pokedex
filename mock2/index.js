// Is the tax given as a percent or a decimal
// With the result, do you want the answer as a string or a number?
// Can the tax be negative or a zero? 

// Tax is assumed as a decimal

// Mock Interview #1

// Given an amount in dollars and a tax percentage, return an array with the tax amount in cents.

taxAmount = (dollars, tax) => {
    const result = [];
    let cents = Number(dollars * tax).toFixed(2)
    result.push(cents);
    console.log(cents)
}

taxAmount(10, 0.07);
taxAmount(20, 0.01);


// Asnc / Await Example

function resolveAfter2Seconds() {
    return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
      }, 2000);
    });
  }

async function asyncCall(){
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);  
  }

asyncCall();