export interface ParamConfig {
    c_app?: string;
    c_soc?: number;
    c_trn?: number;
    c_tip_hst?: string;
    c_tip_usr?: string;
    dataSource?: string;
        
    backgroundImg?: string;
    version?: string;

    refreshing_time?: number;
    refreshing_alarm?: number;
    access_control_time?: number;

    manuale?: string;
    t_den_prc?: string;
    t_par_att_trn?: string;

    local_mode?: boolean;
    functionMap?: any;
    paramConfig?: any;
}