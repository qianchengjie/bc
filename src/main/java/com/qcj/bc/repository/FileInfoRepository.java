package com.qcj.bc.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.qcj.bc.model.FilesInfo;

@Repository
public interface FileInfoRepository extends PagingAndSortingRepository<FilesInfo, Integer>{

}
