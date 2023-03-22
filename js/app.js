function do_math(number_1, number_2) {
    return (number_1 + number_2) * 5;
}
do_math(50, 50);
console.log(`returned 500`);


function do_math_2(number_3, number_4) {
    return (number_3 + number_4) * 15;
}
do_math_2(250, 250);
console.log(`returned 7500`);


function do_math_3(number_5, number_6) {
    return (number_5 + number_6) * 8;
}
do_math_3(550, 525);
console.log(`returned 8600`);


function string_length(return_length_1) {
    if (return_length_1 >= 10) {
        return true;
    }
    return false;
}
string_length(`I_small`.length);
console.log(`I_small: returned false`);


function string_length_2(return_length_2) {
    if (return_length_2 >= 10) {
        return true;
    }
    return false;
}
string_length_2(`I_am_short`.length);
console.log(`I_am_short: returned true`);


function string_length_3(return_length_3) {
    if (return_length_3 >= 10) {
        return true;
    }
    return false;
}
string_length_3(`I_am_over_ten_length`.length);
console.log('I_am_over_ten_length: returned true');





