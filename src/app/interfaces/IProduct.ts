export interface Product {
key: string;                     
  title: string;                      
  author_name?: string[];          
  author_key?: string[];           
  first_publish_year?: number;       
  cover_i?: number;                 
  isbn?: string[];                     
  language?: string[];            
  subject?: string[];                 
  publisher?: string[];               
  number_of_pages_median?: number;    
  ratings_average?: number;         
  ratings_count?: number;
}