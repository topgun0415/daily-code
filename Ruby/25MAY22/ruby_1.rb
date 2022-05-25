my_num = 1;

puts my_num; # 1
print my_num; # 1

puts 'Hello World';
print 'Hello World';
puts 'Hello World';
print 'Hello World';

name = 'HelloWorld'.upcase;

puts(name);

first = 'hello world';
puts first.upcase;

# Function

def greeting(name) 
  puts "Ni hao! #{name}"
end

greeting('Philip');
greeting('Himeru');

# Conditional Statements


if(3>2) 
  puts 'if';
end

if(3<2) 
  puts 'if'
else 
  puts 'else'
end 

month = 5;

if(month == 2) 
  puts 'month is equal to 2';
elsif(month == 3)
  puts 'month is equal to 3';
elsif(month == 4) 
  puts 'month is equal to 4';
else 
  puts 'month is 5'
end

# unless문은 괄호안에 false가 true인 값
unless (month == 3) 
  puts 'month is not 3';
end

# Loop

i = 0;
while(i < 5) 
  puts i;
  i += 1;
end 

# Until

j = 10;
until(j < 5) 
  puts j;
  j -= 1;
end 

# For

for num in 1..5;
  puts "num = #{num}"
  # [1≤num≤5] 
end 

#num = 1
#num = 2
#num = 3
#num = 4
#num = 5


for nums in 1...5;
  puts "nums = #{nums}"
  # [1≤num<5] 
end

#nums = 1
#nums = 2
#nums = 3
#nums = 4
