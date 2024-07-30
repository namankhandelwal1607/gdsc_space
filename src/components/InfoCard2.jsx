import {
    Card,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
  
  export default function InfoCard2({ title, description }) {
    return (
      <Card className="mt-6">
        <CardBody className="flex flex-col items-end">
          <div className="flex flex-col items-end w-full">
            <Typography
              variant="h1"
              color="white"
              className="mb-2 font-bold text-6xl truncate overflow-hidden whitespace-nowrap font-poppins text-right" 
              style={{ fontFamily: 'Nova Square, sans-serif' }}
            >
              {title}
            </Typography>
          </div>
          <Typography color="white" className="font-poppins" style={{ fontFamily: 'Nova Square, sans-serif' }}>
            {description}
          </Typography>
        </CardBody>
      </Card>
    );
  }
  