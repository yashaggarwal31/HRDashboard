
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import DialogFields from '@/components/DialogFields'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { FieldTypes } from "@/components/enums/survey-field-types";
 
export function SurveyInput({children, fieldType, formFields, setFormFields}:{children:string, fieldType:FieldTypes, formFields:any, setFormFields:any}) {

    function addField(formData:FormData){

      const label = formData.get('label') as string;

        setFormFields([...formFields, {"type":FieldTypes.TEXTINPUT,"label":label}])
        
        //get field label
        // let fieldContent = 'Hello'
        // if(fieldType=='label'){
        //   setFormFields([...formFields, {"type":`${fieldType}`,"label":`${fieldContent}`}])
        // }
    }

    

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">{children}</Button>
      </PopoverTrigger>

      
      <PopoverContent className="w-80">
        <form action={addField}>
            <div className="grid gap-4">
            <div className="space-y-2">
                <h4 className="font-medium leading-none">Field Title</h4>
                <p className="text-sm text-muted-foreground">
                {children}
                </p>
            </div>

            <DialogFields fieldType={fieldType} />
            
            </div>
        </form>
      </PopoverContent>
      
    </Popover>
  )
}