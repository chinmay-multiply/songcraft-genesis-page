import { Button } from "@/components/ui/button";

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export const FormModal = ({ isOpen, onClose, title }: FormModalProps) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay that greys out the page */}
      <div className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40" />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-card border border-border rounded-lg p-6 max-w-md w-full shadow-elegant animate-fade-in">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <Button variant="ghost" size="sm" onClick={onClose}>
              ×
            </Button>
          </div>
          
          <div className="text-center py-8">
            <p className="text-muted-foreground">
              Form fields will be implemented in the next prompt as requested.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};