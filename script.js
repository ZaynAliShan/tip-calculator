/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div


total_bill_input = document.getElementById('billTotalInput')
tip_input = document.getElementById('tipInput')
no_of_people = document.getElementById('numberOfPeople')
per_person_bill = document.getElementById('perPersonTotal')

console.log(total_bill_input)
console.log(tip_input)
console.log(no_of_people)
console.log(per_person_bill)



// Get number of people from number of people div

no_of_people_total = Number(no_of_people.innerText)
console.log('Number of people: ', no_of_people_total)





// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  
  bill_total_input = Number(total_bill_input.value)

  total_input_tip = Number(tip_input.value)

  console.log('Bill:', bill_total_input)
  console.log('Tip:', total_input_tip)

  // get the tip from user & convert it into a percentage (divide by 100)
  
  total_tip_percentage = total_input_tip/100
  console.log("Tip %: ", total_tip_percentage)

  // get the total tip amount
  
  const tipAmount = bill_total_input * total_tip_percentage

  // calculate the total (tip amount + bill)
  
  grand_total = bill_total_input + tipAmount

  console.log("Grand Total: ", grand_total)

  // calculate the per person total (total divided by number of people)

  grand_total = grand_total/no_of_people_total
  console.log("Total Per Perons: ", grand_total)

  // update the perPersonTotal on DOM & show it to user

  per_person_bill.innerText = `$${grand_total.toFixed(2)}`

}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people

  no_of_people_total += 1
  console.log('Updated number of people: ', no_of_people_total)

  // update the DOM with the new number of people

  no_of_people.innerText = no_of_people_total 

  // calculate the bill based on the new number of people

  calculateBill()

}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)

  if (no_of_people_total <= 1) {
    return
  }
  
  // decrement the amount of people

  no_of_people_total -= 1

  // update the DOM with the new number of people

  no_of_people.innerText = no_of_people_total

  // calculate the bill based on the new number of people

  calculateBill()

}