import javax.swing.JOptionPane;
import org.opentutorials.iot.DimmingLights;
import org.opentutorials.iot.Elevator;
import org.opentutorials.iot.Lighting;
import org.opentutorials.iot.Security;

public class Egoing4 {
    
	 public static void main(String[] args) {
		 
		 
		 String id = JOptionPane.showInputDialog("Enter a ID");
		 String bright = JOptionPane.showInputDialog("Enter a Bghtness");
		 
		 
		 // Elevator call 
    	Elevator myElevator = new Elevator(id);
    	myElevator.callForUp(1);
    	
		 
		 // Security off
		 Security mySecurity = new Security(id);
		mySecurity.off();
		
		 
		 // Light on
		Lighting hallLamp = new Lighting( id +" / hall Lamp");
		hallLamp.on();
		
		Lighting floorLamp = new Lighting( id +" / floor Lamp");
		floorLamp.on();
		
		DimmingLights moodLamp = new DimmingLights ( id + " moodLamp");
		moodLamp.setBright(Double.parseDouble(bright));
		moodLamp.on();
		
		
 
	 }
}