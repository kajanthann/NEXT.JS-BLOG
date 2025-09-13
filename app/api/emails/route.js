import EmailModel from "@/lib/models/emailModel";

const LoadDB = async () => {
    await connectedDB();
}

LoadDB();

export async function POST(request) {
    const formData = await request.formData();
    const emailData = {
        email:`${formData.get('email')}`,
    }  
    await EmailModel.create(emailData);
    return NextResponse.json({success:true,message:'Email Subscribed'});
}