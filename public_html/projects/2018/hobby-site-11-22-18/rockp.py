import random;
import os;
import turtle;
rpsg = ['rock','paper','scissors','gun']

print ('you will begin by picking numbers 0-3')
print (rpsg[0] + ' 0 ', rpsg[1] + ' 1 ', rpsg[2] + ' 2 ',rpsg[3] + ' 3 ')


def start():
    value = 0
    corrected_value = 0
    user_input=input('please put your guess here:')
    if  (isinstance(user_input,str) == True and user_input.isdigit() != True ):
        user_input.lower();
        print('its a string ' + user_input)
        for i in range(len(rpsg)):
            if (rpsg[i] == user_input):
                value=i
                print('you have entered a correct value')
                corrected_value = value
                value= corrected_value
                return corrected_value;

    if (isinstance(user_input,int) == True or user_input.isdigit() == True):
        print('its an int ' + str(user_input))
        value = int(user_input)
        user_input = int(user_input)
        if (value <= 3 and value >=0):
            print('you have entered a correct value')
            corrected_value = user_input
            return corrected_value;


answer = start()

def computer(answer):
    random_num = random.randint(0,3)
    print ('Your number is '+ str(answer));
    print ('computer\'s random number is '+ str(random_num));
    if (random_num < answer):
        print ('you have won the game')
    elif(random_num == answer):
        print('tie breaker')
    else:
        print('you have lost the game')
    return

computer(answer)
