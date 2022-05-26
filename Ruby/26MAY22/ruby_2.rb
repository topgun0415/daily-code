# Iterator 

#.each === foreach()
object = [1,2,3];
object.each do |x|
  x += 1
  puts "#{x}"
end 

object2 = [1,2,3];
object.each { |x|
  x += 1;
  puts x;
}


#.times === repeat()
object3 = 'ohayo my night';

3.times do 
  puts object3;
end 


# Array

arr = [1,2,3];

puts arr[0];

arr.each do |y| 
  y += 1;
  print y;
end

# Hash 

person = {
  "name" => "Philip",
  "sex" => "Male"
}

puts person;


movie = Hash.new;
movie['Harry Potter'] = 'WarnerBros';
movie['Avengers'] = 'Marvle';

movie.each do |(key), (value)|
  puts "#{key}: #{value}";
end
