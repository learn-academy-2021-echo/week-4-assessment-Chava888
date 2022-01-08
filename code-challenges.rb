# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def even_odd_function (number) #parentheses for readiblity
    if number.odd?
       p "#{number} is odd"

    elsif number.even?
        p "#{number} is even"
    end

end

even_odd_function(num1)#parentheses for readiblity
even_odd_function(num2)#parentheses for readiblity
even_odd_function(num3)#parentheses for readiblity



# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def remove_vowels (string_word)#parentheses for readiblity
    p string_word.delete 'A' 'E' 'I' 'O' 'U' 'a' 'e' 'i' 'o' 'u'

end


remove_vowels(album1)#parentheses for readiblity
remove_vowels(album2)#parentheses for readiblity
remove_vowels(album3)#parentheses for readiblity

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forwards or backwards. Use the test variables provided.

is_palindrome1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
is_palindrome2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
is_palindrome3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindrome (word)#parentheses for readiblity
    lower_case = word.downcase
    if lower_case == lower_case.reverse
        p "#{word} is a palindrome"
    else 
        p "#{word} is not a palindrome"
    end
end

palindrome(is_palindrome1)#parentheses for readiblity
palindrome(is_palindrome2)#parentheses for readiblity
palindrome(is_palindrome3)#parentheses for readiblity

