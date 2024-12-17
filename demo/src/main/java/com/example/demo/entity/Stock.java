package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "nasdaqlists")
public class Stock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "symbol")
    private String symbol;

    @Column(name = "company_name")
    private String companyName;

    @Column(name = "security_name")
    private String securityName;

    @Column(name = "market_category")
    private String marketCategory;

    @Column(name = "test_issue")
    private String testIssue;

    @Column(name = "financial_status")
    private String financialStatus;

    @Column(name = "round_lot_size")
    private String roundLotSize;

    public Stock() {
    }

    // Getter 및 Setter 메서드

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getSecurityName() {
        return securityName;
    }

    public void setSecurityName(String securityName) {
        this.securityName = securityName;
    }

    public String getMarketCategory() {
        return marketCategory;
    }

    public void setMarketCategory(String marketCategory) {
        this.marketCategory = marketCategory;
    }

    public String getTestIssue() {
        return testIssue;
    }

    public void setTestIssue(String testIssue) {
        this.testIssue = testIssue;
    }

    public String getFinancialStatus() {
        return financialStatus;
    }

    public void setFinancialStatus(String financialStatus) {
        this.financialStatus = financialStatus;
    }

    public String getRoundLotSize() {
        return roundLotSize;
    }

    public void setRoundLotSize(String roundLotSize) {
        this.roundLotSize = roundLotSize;
    }
}