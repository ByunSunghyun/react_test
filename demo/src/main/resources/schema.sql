DROP TABLE IF EXISTS nasdaqlists;

CREATE TABLE nasdaqlists (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    symbol VARCHAR(255),
    company_name VARCHAR(255),
    security_name VARCHAR(255),
    market_category VARCHAR(255),
    test_issue VARCHAR(255),
    financial_status VARCHAR(255),
    round_lot_size VARCHAR(255)
);

INSERT INTO nasdaqlists (symbol, company_name, security_name, market_category, test_issue, financial_status, round_lot_size)
SELECT * FROM CSVREAD('classpath:nasdaq_list.csv');