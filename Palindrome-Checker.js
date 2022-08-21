function palindrome(str) {
    var str1 = str; //creating new temp 
    // var str2 = str1.replace(/[!@#$%^&*_+,.?\/+-;:'"()]/g, ""); //removing all the punctuattion using "replace" regex
    var str2 = str1.replace(/[!"#$%&'()*+,-./:;<=>?@\^_`{|}~]/g, ""); //removing all the punctuattion using "replace" regex
    var str3 = str2.replaceAll(" ", ""); //removing all the whitespaces using "replaceAll" regex
    str=str3.toLowerCase(); //converting to lowercase and assigning back to main parameter

    console.log(str)

    if (str.length % 2 == 0) //checking if the string is even or odd
    {
            var check = 0; //initializing checking variable
            for (var i = 0, j = str.length - 1; i < (str.length / 2), j >= (str.length / 2); i++, j--) 
        {
                if (str[i] === str[j])
                    check++;
                else
                    break; //if letters are not same breaking the loop for saving execution time
        }
        if (check == str.length / 2) //checking if letters are same upto string half is yes then the string is palindrome 
            return true;
        else return false;
    }
    else // for odd string
    {
        var check = 0;
        for (var i = 0, j = str.length - 1; i < (str.length / 2 - 0.5), j > (str.length / 2 - 0.5); i++, j--) //for odd string loop upto half of string - 0.5
        {
            if (str[i] === str[j])
                check++;
            else
                break;

        }
        if (check == str.length / 2 - 0.5) //checking if letters are same upto string half is yes then the string is palindrome
            return true;
        else return false;

    }
}

console.log(palindrome("0_0 (: /-\ :) 0-0"))
 