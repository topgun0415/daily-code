
public class originJava3 {
public static void main(String[] args) {
	
	// Variable 변수
	
	int boo = 1;
    
	//Integer (정수)의 앞 약자인 int 를 넣고 뒤에 변수 선언할 이름을 정한뒤 변수 형태에 따라 거기에 값을 입력한다.
	// 변수 선언문 = 변수타입 + 변수이름;
	
	//age = 25 는 변수 age에 25를 대입한다는 의미임. 자바에서는 =는 같다는 등호표시가 아닌 대입연산자라 부른다. (자바에서는 ==가 따로 있다.)
	
	//변수의 초기화 = 변수에 처음으로 값을 저장하는 것
	
	int x = 5;  // 변수 x를 선언 후, 5로 초기화 
	int y = 4;  // 변수 y를 선언 후, 4로 초기화
	int z = 5, q = 4;  // 위의 두 줄을 한줄로 선언 해 초기화 하는 방법도 있다.
	
	int year = 0, age = 14;
	year = age + 2000;
	year = 14+2000;
	year = 2014;
	
	age = age + 1; 
	age = 14 + 1;
	age = 15;
	
	// 이렇게 변수를 선언하고 초기화 했더라도 뒤에 식에 따라서 언제든지 변수가 변하기도 함. age는 14였지만 뒤에 + 1를 대입해 age라는 변수에는 15라고 저장되어있음.
	
	System.out.println(age);
	System.out.println(year);
	
	age = age + 5;
	System.out.println(age);
	

	
	
	
	
	
	
	
	
	
 }
}
