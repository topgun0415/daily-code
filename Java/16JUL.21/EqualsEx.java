
public class Main {

	public static void main(String[] args) {

			Person p1 = new Person (801108111122L);
			Person p2 = new Person (801108111122L);
		
			if (p1 == p2 ) 
				System.out.println("p1과 p2는 같은 사람(주소값)입니다.");
			else
				System.out.println("p1과 p2는 다른 사람(주소값)입니다.");
		
			if(p1.equals(p2))
				System.out.println("p1과 p2는 같은 사람입니다.");
			else 
				System.out.println("p1과 p2는 다른 사람입니다.");
	}
}

class Person {
	long id;	
	
	public boolean equals(Object obj) { 		//equals 메서드 오버라이딩
		if(obj instanceof Person) 
			return id == ((Person)obj).id;
		else 
			return false;
	}
	
	Person (long id) {
		this.id = id;
	}
}
