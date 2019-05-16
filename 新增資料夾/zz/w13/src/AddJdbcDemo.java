
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class AddJdbcDemo {

	public static void main(String[] args) {

		try {
			Class.forName("com.mysql.cj.jdbc.Driver").newInstance();
		} catch (Exception ex) {
			// handle the error
		}

		Connection conn = null;
		try {
			conn = DriverManager.getConnection(
					"jdbc:mysql://localhost/db_java?" + "user=root&password=0000&serverTimezone=UTC&useSSL=false");

			Statement stmt = conn.createStatement();

			PreparedStatement sql = conn
					.prepareStatement("INSERT INTO student(sName, java_teacher) VALUES (?,?),(?,?)");
			sql.setString(1, "Ted");
			sql.setInt(2, 2);
			sql.setString(3, "David");
			sql.setInt(4, 3);
            sql.executeUpdate();
			
			ResultSet rs = stmt
					.executeQuery("SELECT S.*, tName FROM student AS S , teacher AS T WHERE java_teacher = tid");

			while (rs.next()) {
				System.out.println(
						rs.getInt(1) + "\t" + rs.getString(2) + "\t" + rs.getString(3) + "\t" + rs.getString(4));
			}

		} catch (SQLException ex) {
			// handle any errors
			System.out.println("SQLException: " + ex.getMessage());
			System.out.println("SQLState: " + ex.getSQLState());
			System.out.println("VendorError: " + ex.getErrorCode());
		}

	}
}