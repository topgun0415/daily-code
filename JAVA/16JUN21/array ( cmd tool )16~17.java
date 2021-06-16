import java.lang.reflect.Array;
import java.util.*;
public class originJava30 {

	public static void main(String[] args) {

	  // 커맨드 라인 입력받기 : Command line (CMD) 에 입력한 값이 문자열 배열에 담겨서 전달된다.
		
		System.out.println("매개변수의 개수 : " + args.length + "개");
		
		for (int i = 0; i < args.length; i++)
		{
			System.out.println("args[" + i + "] =  \"" + args[i] + "\""  );
			
		}
		
	}
	
 }
	

/* Cmd 사용 방법
 *  Java version 보기 = java --version
 *  이클립스에서 바로 폴더경로 찾기 : alt + enter 
 *  경로로 들어가기 : cd + 경로 
 *  경로에서 파일 읽기 : dir
 *  해당 파일 내용 읽기 : type + (이름).java 
 *  해당 파일에서 args 클래스 값 입력하기 : java (이름).java 내용 입력하기
 *  java 파일에서 class파일로 만들기 : javac (파일이름).java ( 이거하면 java (파일이름) 하고 뒤에 .java를 붙일 필요가 없어짐
 */

