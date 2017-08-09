<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Tithe extends Zend_Db_Table {

    protected $_name = 'wo_tithe';
    protected $_primary = 'id_tithe';
    protected $_rowClass = 'Tithe';
    
    public function selectView($id_business = null) {
        $sql = $this->getAdapter()->select()->from('view_tithe');
        
        if ($id_business != null) {
            $sql->where('id_event = ?', $id_business);
        }
        
        return $this->getAdapter()->fetchAll($sql);   
    } 
    
    public function insertTable($data = null) {            
        return $this->insert($data);         
    }
    
    public function updateTable($id_user = null, $data = null) {        
        $where = $this->getAdapter()->quoteInto('id_tithe = ?', $id_user);        
        return $this->update($data, $where);         
    }
    
    public function deleteTable($id_tithe = null) {        
        $where = $this->getAdapter()->quoteInto('id_tithe = ?', $id_tithe);        
        return $this->delete($where);         
    }
    
}
