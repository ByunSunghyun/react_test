package com.example.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.entity.TradeInfo;

import java.util.List;


public interface TradeRepository extends JpaRepository<TradeInfo, Long> {
    TradeInfo findByStockId(String stockId); // stockId로 검색하는 메서드

    List<TradeInfo> findByUserId(Long userId);

}
