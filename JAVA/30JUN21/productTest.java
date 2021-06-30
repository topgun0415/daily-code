class product {
	
	static int count = 0; // 생성된 인스턴스의 수를 저장하기 위한 클래스 변수
	int serialNo;				 // 인스턴스 고유의 번호 
	
	{
		++count; 				 // Product 인스턴스가 생성될 때마다 count의 값을 1씩 증가하고, 그 값을 시리얼 넘버에 대입하도록 함
		serialNo = count;
	}
	
	public product () { }  // 기본 생성자지만 클래스 안에 생성자가 없기때문에 굳이 필요없음
	
}

class ch06practice {
		
	public static void main (String [] args) { 
		
		product p1 = new product ();
		product p2 = new product ();
		product p3 = new product ();
	
		System.out.println("p1의 제품번호(Serial No)는 " + p1.serialNo);
		System.out.println("p2의 제품번호(Serial No)는 " + p2.serialNo);
		System.out.println("p3의 제품번호(Serial No)는 " + p3.serialNo);
		System.out.println("생산된 제품의 수는 모두 " + p3.serialNo + "개 입니다.");

	}
	  
}

	//만약 count를 인스턴스 변수로 선언했다면 , 인스턴스가 생성될 때마다 0으로 초기화 될 것이므로 모든Proudct인스턴스의 serialNo값은 항상 1이 된다.



  
