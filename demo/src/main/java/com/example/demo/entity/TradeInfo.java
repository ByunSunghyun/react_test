package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "trade_info") // 테이블 이름을 "users"로 변경
public class TradeInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private Long userId;
    private String stockId;
    private double amount;
    private double price;
    private String trade_date;

    // 기본 생성자
    public TradeInfo() {
    }
    // Getters and Setters
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public Long getUserId() {
        return userId;
    }
    public void setUserId(Long userId) {
        this.userId = userId;
    }
    public String getStockId() {
        return stockId;
    }
    public void setStockId(String stockId) {
        this.stockId = stockId;
    }
    public double getAmount() {
        return amount;
    }
    public void setAmount(double amount) {
        this.amount = amount;
    }
    public double getPrice() {
        return price;
    }
    public void setPrice(double price) {
        this.price = price;
    }
    public String getTrade_date() {
        return trade_date;
    }
    public void setTrade_date(String trade_date) {
        this.trade_date = trade_date;
    }
}
