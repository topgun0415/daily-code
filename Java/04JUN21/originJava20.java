
public class originJava20 {

	public static void main(String[] args) {
		
		// 난수 (임의의 정수) 만들기 = 로또 추첨 및 번호 게임 / Math.random() - <0.0과 1.0사이의 임의 double값을 반환> 라는 메서드가 들어감. 
		
	   
	   int num = 0;   // 왜 이 변수를 초기화??
	   
	   System.out.println("What will lottery numbers tomorrow? ->");
	   System.out.println();
	   
	   for ( int i = 1; i <= 6; i++) 
     {
		
		   System.out.println((int)(Math.random()*46)+1);   //메서드에 바로 7을 곱해도 되겠지만 내가 아닌 타인이 봤을때 헷갈릴 수 있으니까 +1로 작성
//       System.out.println((int)(Math.random()*46)-10);  ( -10 <= x  < 36 )   
//       즉 (Math.random() * y)+-z 는  ( y <= x < y+-z 
		   
	   }
	}
}
