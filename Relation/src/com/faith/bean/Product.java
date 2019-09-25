package com.faith.bean;

import java.util.HashSet;
import java.util.Set;

public class Product {
	private int pid;
	private String name;
	private int cost;
	private Set<Manufacture> manufactures=new HashSet<Manufacture>();
	public Product(int pid, String name, int cost, Set<Manufacture> manufactures) {
		super();
		this.pid = pid;
		this.name = name;
		this.cost = cost;
		this.manufactures = manufactures;
	}
	public Product(String name, int cost, Set<Manufacture> manufactures) {
		super();
		this.name = name;
		this.cost = cost;
		this.manufactures = manufactures;
	}
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getCost() {
		return cost;
	}
	public void setCost(int cost) {
		this.cost = cost;
	}
	public Set<Manufacture> getManufactures() {
		return manufactures;
	}
	public void setManufactures(Set<Manufacture> manufactures) {
		this.manufactures = manufactures;
	}
	@Override
	public String toString() {
		return "Product [pid=" + pid + ", name=" + name + ", cost=" + cost
				+ ", manufactures=" + manufactures + "]";
	}
	
	public void addManufacture(Manufacture manufacture){
		this.manufactures.add(manufacture);
	}
	

}
