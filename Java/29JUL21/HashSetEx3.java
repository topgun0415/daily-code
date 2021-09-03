import java.lang.reflect.Array;
import java.util.*;

public class Main {
	public static void main (String [] args) {
			
		HashSet set = new HashSet ();
		
		set.add("abc");
		set.add("abc");
		set.add(new Person ("David", 10) );
		set.add(new Person ("David", 10) );
		
		System.out.println(set);	// HashSet인데도 불구하고 두 개의 인스턴스로 인해 David : 10 이 중복되어 나오고 있다. 이를 어떻게 없앨 수 있을까?
		
		
	}
	
}
class Person {
	String name;
	int age;
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + age;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Person other = (Person) obj;
		if (age != other.age)
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}

	Person () { } 
	
	Person (String name, int age) {
		this.name = name;
		this.age = age;
	}


	public String toString () {
		return name + ":" + age;
	}
	
}

// Source를 통한 equals() 와 hascode() 오버라이딩은 버튼 하나로 hashcode를 통해 중복값을 없애줄 수 있지만 반대로 내가 원하고자 하는 equals () 값이 안나올 수 도있다. 
