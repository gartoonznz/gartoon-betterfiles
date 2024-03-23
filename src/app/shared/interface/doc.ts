export interface doc{
    doc_no:string
    doc_head:string
    date_write:any
    time_write:any
    date_active:any
    date_in:any
    doc_type_name:string
    doc_type_id:number
    seen:boolean
    doc_state_name:string
    doc_state_id:number
    term:number
    year:number
    teacher_id:number[]
    check:boolean
}
export interface docType{
    doc_type_name:string
    doc_type_id:number
}