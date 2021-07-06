 /* 일반적인 소스파일(*.java)의 구성은 다음의 순서로 되어 있다.
  * 1. Package 문
  * 2. import 문
  * 3. 클래스 선언
  */

import java.util.Calendar;
import java.util.Date;
import java.util.ArrayList;
// || 밑에 있는 java.util.*  ←  *을 이용해서 지정된 패키지에 속하는 모든 클래스를 패키지명 없이 사용할 수 있다. 즉 밑의 문장 하나로 위에 있는 모든걸 대체 가능
import java.util.*;  
import java.text.*;
// 위의 두 문장 대신 import java.*: 와 같은건 할 수 없다.

import java.text.SimpleDateFormat;
import java.util.*;

import static java.lang.Integer.*;  // Integer클래스의 모든 static 메서드
import static java.lang.Math.random; // Math.random ( )만. 괄호 안붙임.
import static java.lang.System.out; // System.out을 out만으로 참조 가능


public class ch07Practice {

	public static void main (String [] args ) {
		
		Date today = new Date ();   //Date 클래스를 today라는 이름으로 인스턴스 생성

		SimpleDateFormat date = new SimpleDateFormat ("yyyy/MM/dd");  // date 객체 생성과 동시에 메서드를 사용
		SimpleDateFormat time = new SimpleDateFormat ("hh:mm:ss a"); // time 객체 생성과 동시에 메서드 사용
		
		System.out.println("오늘의 날짜는" + date.format(today) + "입니다.");
		System.out.println("현재 시간은 " + time.format(today) + "입니다.");
	
	    out.println ((int)(random () * 10));  // System.out.println ((int)(Math.random () * 10)) 와 같음
		
	}
		
}
