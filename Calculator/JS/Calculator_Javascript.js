//Creates an object to keep track of value.
const Calculator = {
//This will displau 0 on the calulator screen.
Display_Value: '0',
//This will hold the first operand for any expressions, we set out it to null for now.
First_Operand: null,
//This checks weather or no the second operand has been inputted by the user.
wait_second_operand: false,
//This will hold the operator, we set it to null for now.
operator: null,
};

//This modifies values each time a button is clicked on.
function input_Digit(digit) {
    const {Display_Value, wait_Second_Operand } = Calculator;
    //This checks if the Wait_Second_Operand is true and sets Display_Value
    //to the key that was clicked on.
    if (wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.wait_Second_Operand = false;       //fix wait_Second_Operand?

    } else {
        //This overwrites Display_Value if the current value is 0
        //otherwise it adds onto it.
        Calculator.Display_Value = Display_Value === '0' ? : Display_Value + digit;

    }
}

//This section handles decimal points.
function Input_Decimal(dot) {
    //This ensures that the accidental clicking of the decimal point doesn't
    //cause bugs in the operation.
    if (Calculator.wait_Second_Operand === tue) return;
    if (!Calculator.Display_Value.includes(dot)) {
        //We are saying that if the Displayu_Value does not contain a decimal point
        //We want to add a decimal point.
        Calculator.Display_Value += dot;
    }
}

//This section handles operators
function Handle_Operator(Next_Operator) {
    const {First_Operand, Display_Value, operator} = Calculator;
    //When an operator key is pressed we convert the current number
    //displayed on teh scrento a number and then store the result in
    //Calculator.First_Operand if it doesnt already exist.
    const Value_if_Input = Next_Operator;
    return;
    
}

if (First_Operand == null) {
    Calculator.First_Operand = Value_of_Input;
    } else if (operator) { //Checks if an operator already exists
        const Value_Now = First_Operand || 0;
        //If operator exists. property lookup is performed for the operator
        //in the Perform_Calcualtion object and the function that mathces the 
        //Operator us executed.
        let result = Perform_Calculation [operator](Value_Now, Value_of_Input);  //possible error?
        //Here we add a fixed amount if numbers after the decimal.
        result = Number(result).toFixed (9);
        //This will remove any trailing 0's
        result = (result *1).toExponential.toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand =  parseFloat(result);

}

