import java.util.*;
public class originJava28 {

	public static void main(String[] args) {
		
		// 가위바위보 게임 만들기 
		
		System.out.println("가위 바위 보 중 하나를 택하시오");
		System.out.println("(※ 예 : 바위 = 1 가위 = 2 보 = 3)");
		Scanner scanner =  new Scanner (System.in);
		int user = scanner.nextInt();
		int com = (int) (Math.random() * 4);
		
		System.out.println("당신은 " + user + " 입니다.");
		System.out.println("상대방은 " + com + "입니다.");
		System.out.println();
		switch (user-com)
		{ 
		
		case -1: case 2:
			
			System.out.println("당신이 이겼습니다 ^^");
		
			break;
			
		case -2 :case 1: 
		
			System.out.println("당신이 졌습니다 ㅠㅠ");
			
			break;
			
		case 0 :
		
			System.out.println("비겼습니다~!");	
	
		}

	}

}
