package com.faith.App;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;
import org.hibernate.service.ServiceRegistryBuilder;

import com.faith.bean.Manufacture;
import com.faith.bean.Product;

public class AppManytoMany {
	public static void main(String[] args) {
		Configuration configuration=new Configuration();
		configuration.configure();
		ServiceRegistry serviceRegistry=new ServiceRegistryBuilder().applySettings(configuration.getProperties()).buildServiceRegistry();
		
		SessionFactory sessionfactory=configuration.buildSessionFactory(serviceRegistry);
		
		Session session=sessionfactory.openSession();
		
		
		Transaction t=session.beginTransaction();
		Manufacture m1=new Manufacture();
		Manufacture m2=new Manufacture();
		Manufacture m3=new Manufacture();
		
		m1.setName("Samsung");
		m2.setName("lg");
		m3.setName("frontech");
		
		Product p1=new Product();
		Product p2=new Product();
		Product p3=new Product();
		
		p1.setName("pendrive");
		p1.setCost(400);
		p2.setName("Harddisk");
		p2.setCost(1000);
		p3.setName("connector");
		p3.setCost(150);
		
		m1.addProduct(p1);
		m2.addProduct(p2);
		m3.addProduct(p3);
		
		p1.addManufacture(m1);
		p2.addManufacture(m2);
		p3.addManufacture(m3);
		
		
		session.persist(m1);
		session.persist(m2);
		session.persist(m3);
		t.commit();
		session.close();
		sessionfactory.close();
		System.out.println("successfull");
	}

}
