
class originJava04 {
public static void main(String[] args) {
	
	//Type of Variable
	
	int age = 25; //int는 정수만 대입 가능.. 3.14와 같은 실수를 저장하는 건 불가능 (실수는 double) 
	char ch = '가';  //Char는 문자타입
	double pi = 3.14; //double 는 실수 
	
	System.out.println(ch);
	// Variable & Constant 
	/*
	 * Variable (변수) = 하나의 값을 저장하기 위한 공간, 처음에 한번 값을 저장했더라도 다시 바꿀수있음.
	 * Constant (상수) = 변수와 마찬가지로 하나의 값을 저장하기 위한 공간이지만 처음에 한번 저장한 값을 다른것으로 바꾸지 못함
	 */
	
	int score = 100;
    score = 250;
	System.out.println(score); //앞에서 100으로 변수를 선언하지만 뒤에서 250를 재선언 했기때문에 250이 찍혀서 나오는걸 볼수있음.
	
	//상수를 선언하기 위해서는 변수값 앞에 final을 넣어주면 상수값으로 선언할수있음
	
	final int score1 = 150;
	System.out.println(score1);
	
	score1 = 250; 
	System.out.println(score1);  //최종 변수값을 선언했기에 출력에 에러가 나는걸 볼수있음 
	
	
	

	
	
	
	
	
	
	
  }
}
