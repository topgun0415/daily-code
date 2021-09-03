import org.opentutorials.iot.Elevator;
import org.opentutorials.iot.Lighting;
import org.opentutorials.iot.Security;


public class Egoing3 {
   public static void main(String[] args) {
	   
	  // Security off 
	   Security mySecurity = new Security("JAVA APT 507") ;
	   mySecurity.off();
	   
	  // Light on
	   Lighting hallLamp = new Lighting("JAVA APT 507  /  Hall Lamp") ;
	   hallLamp.on();
	   
	   Lighting floorLamp = new Lighting("JAVA APT 507 / floor Lamp") ;
	   floorLamp.on();
	   
	   
	   // This fomular is not working at all... 
	
	   
   }
}
 